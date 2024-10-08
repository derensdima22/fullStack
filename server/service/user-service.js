const UserModel = require('../models/user-model');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const mailService = require('./mail-service');
const tokenService = require('./token-service');
const UserDto = require('../dtos/user-dto');
const ApiError = require('../exceptions/api-error');

class UserService {
    async registration(email, password, name) {
        const candidate = await UserModel.findOne({email});
        if(candidate) {
            throw ApiError.BadRequest(`A user named ${email} already exists`)
        }
        const hashPassword = await bcrypt.hash(password, 3);
        const activationLink = uuid.v4();
        const permissions = ['all'];

        const user = await UserModel.create({email, password: hashPassword, activationLink, name, permissions});
        await mailService.sendActivationMail(email, `${process.env.API_URL}/api/activate/${activationLink}`);

        const userDto = new UserDto(user);
        const tokens = tokenService.generateToken({...userDto});
        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return {
            ...tokens,
            user: userDto
        }
    }

    async activate(activationLink) {
        const user = await UserModel.findOne({activationLink});
        if(!user) {
            throw ApiError.BadRequest('Incorrect activation link')
        }
        user.isActivate = true;
        await user.save();
    }

    async login(email, password) {
        const user = await UserModel.findOne({email});
        if(!user) {
            throw ApiError.BadRequest('No user with this name was found');
        }
        const isPassEquals = await bcrypt.compare(password, user.password);
        if(!isPassEquals) {
            throw ApiError.BadRequest("The data isn't correct.");
        }
        const userDto = new UserDto(user);
        const tokens = tokenService.generateToken({...userDto});
        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return {
            ...tokens,
            user: userDto
        }
    }

    async logout(refreshToken) {
        const token = await tokenService.removeToken(refreshToken);
        return token;
    }

    async refresh(refreshToken) {
        if(!refreshToken) {
            throw ApiError.UnauthorizedError();
        }
        const userData = tokenService.validateRefreshToken(refreshToken);
        const tokenFromDb = await tokenService.findToken(refreshToken);
        if(!userData || !tokenFromDb) {
            throw ApiError.UnauthorizedError();
        }
        const user = await UserModel.findById(userData.id);
        const userDto = new UserDto(user);
        const tokens = tokenService.generateToken({...userDto});
        await tokenService.saveToken(userDto.id, tokens.refreshToken);
        return {...tokens, user: userDto}
    }

    async getAllUsers(refreshToken) {
        const users = UserModel.find();
        return users;
    }

    async getOneUser(id) {
        const user = await UserModel.findById(id);
        const userDto = new UserDto(user);

        if(!userDto) {
            throw ApiError.BadRequest('No user with this name was found');
        }
        
        return userDto;
    }

    async patchOneUser(id, body) {
        const user = await UserModel.findById(id);
        const { name, number, address, contactNumber } = body;
        user.name = name || user.name;
        user.address = address || user.address;
        user.number = number || user.number;
        user.contactNumber = contactNumber || user.contactNumber;
       
        await user.save();

        return user;
    }

    async edit(result) {
        const {name, address, id} = result;
        const user = await UserModel.findById(id);

        const userDto = new UserDto({...user});

        userDto.name = name || user.name;
        userDto.address = address || user.address;

        await user.save();
        // return {
        //     user: userDto
        // };
    }
}

module.exports = new UserService();