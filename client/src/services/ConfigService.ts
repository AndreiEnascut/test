export default class Config {
    serverDomain = 'http://localhost:3000';
    globalAPIPath = 'api';
    phoneAPIPath = 'phone';

    public getPhoneEndpoint() : string {
        return [this.serverDomain, this.globalAPIPath, this.phoneAPIPath].join('/')
    }
}
