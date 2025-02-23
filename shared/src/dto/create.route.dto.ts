/**
 * @file DTO specification for creating a route.
 */
import { ApiProperty } from '../decorators';
import {CreateRouteSegment} from './create.route.segment.dto';

export class CreateRouteDto {
    @ApiProperty({required: false, type: String})
    name?: string;

    @ApiProperty({required: false, type: String})
    description?: string;

    @ApiProperty({ required: false,  type: [CreateRouteSegment]})
    segments?: CreateRouteSegment[];

    @ApiProperty({required: false, type: String})
    tripId: number;
}
