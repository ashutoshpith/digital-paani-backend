import * as bcrypt from 'bcrypt';

export class HashService {
  private static async getSalt(): Promise<string> {
    const saltRounds = 10;
    return bcrypt.genSalt(saltRounds);
  }

  static async hashValue(value: string): Promise<string> {
    const salt = await this.getSalt();
    return bcrypt.hash(value, salt);
  }

  static async hasValidHash(
    value: string,
    hashValue: string,
  ): Promise<boolean> {
    return bcrypt.compare(value, hashValue);
  }
}
