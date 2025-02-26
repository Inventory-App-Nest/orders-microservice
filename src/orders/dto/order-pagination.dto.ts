import { IsEnum, IsOptional } from 'class-validator';
import { PaginationDTO } from '../../common/dto/pagination.dto';
import { OrderStatusList } from '../enum/order.enum';
import { OrderStatus } from '@prisma/client';

export class OrderPaginationDto extends PaginationDTO {
    @IsOptional()
    @IsEnum(OrderStatusList, {
        message: `Valid status are ${OrderStatusList}`,

    })
    status: OrderStatus;
}
