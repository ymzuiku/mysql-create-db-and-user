export declare function deleteUser(connector: any, user: string, host: string): Promise<void>;
export interface CreateDbAndUserOpt {
    host: string;
    dbName: string;
    user: string;
    password: string;
}
declare function createDbAndUser(connector: any, { host, dbName, user, password }: CreateDbAndUserOpt): Promise<void>;
export default createDbAndUser;
