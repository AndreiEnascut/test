import axios, { AxiosResponse }  from 'axios';
import Config from '@/services/ConfigService';
import { Phone } from '@/types';

export default class PhoneService {
    phoneEndpoint = new Config().getPhoneEndpoint();

    public create(phone: Phone): Promise<AxiosResponse<Phone>> {
        return axios.post(this.phoneEndpoint, phone)
    }

    public findAll(): Promise<AxiosResponse<Phone[]>> {
        return axios.get(this.phoneEndpoint);
    }

    public findOne(id: string): Promise<AxiosResponse<Phone>> {
        return axios.get(`${this.phoneEndpoint}/${id}`)
    }

    public update(phone: Phone): Promise<AxiosResponse<Phone>> {
        return axios.patch(`${this.phoneEndpoint}/${phone.id}`, phone)
    }

    public remove(id: string): Promise<AxiosResponse<void>> {
        return axios.delete(`${this.phoneEndpoint}/${id}`)
    }
}