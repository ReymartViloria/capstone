import { User } from '../models/user';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export class AuthService {
    private userModel: typeof User;

    constructor(userModel: typeof User) {
        this.userModel = userModel;
    }

    async register(email: string, password: string, role: 'student' | 'admin') {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await this.userModel.create({ email, password: hashedPassword, role });
        return newUser;
    }

    async login(email: string, password: string) {
        const user = await this.userModel.findOne({ where: { email } });
        if (!user) {
            throw new Error('User not found');
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error('Invalid password');
        }

        const token = this.generateToken(user);
        return { user, token };
    }

    private generateToken(user: any) {
        const payload = { id: user.id, role: user.role };
        return jwt.sign(payload, process.env.JWT_SECRET || 'secret', { expiresIn: '1h' });
    }
}