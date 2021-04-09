import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePhoneDto } from './dto/create-phone.dto';
import { UpdatePhoneDto } from './dto/update-phone.dto';
import { Phone } from './entities/phone.entity';

@Injectable()
export class PhoneService {

  constructor(
    @InjectRepository(Phone)
    private readonly phoneRepository: Repository<Phone>,
  ) { }

  create(createPhoneDto: CreatePhoneDto) {
    const phone = new Phone();
    phone.type = createPhoneDto.type;
    phone.serial = createPhoneDto.serial;
    phone.color = createPhoneDto.color;
    phone.meta = createPhoneDto.meta;

    return this.phoneRepository.save(phone);
  }

  findAll(): Promise<Phone[]> {
    return this.phoneRepository.find();
  }

  findOne(id: number): Promise<Phone> {
    return this.phoneRepository.findOne(id);
  }

  update(id: number, updatePhoneDto: UpdatePhoneDto) {
    const phone = new Phone();
    phone.type = updatePhoneDto.type;
    phone.serial = updatePhoneDto.serial;
    phone.color = updatePhoneDto.color;
    phone.meta = updatePhoneDto.meta;
    return this.phoneRepository.update(id, phone);
  }

  async remove(id: number): Promise<void> {
    await this.phoneRepository.delete(id);
  }
}
