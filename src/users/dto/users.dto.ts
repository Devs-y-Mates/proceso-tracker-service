import { ApiProperty } from '@nestjs/swagger';
export class CreateUserDto {
  @ApiProperty({
    example: 'User id',
  })
  readonly user_id: string;

  @ApiProperty({
    example: 'User valid email',
  })
  readonly email: string;

  @ApiProperty({
    example: 'Password',
  })
  readonly password: string;

  @ApiProperty({
    example: 'Refresh Token jwt',
  })
  readonly refresh_token: string;

  @ApiProperty({
    example: 'Is user active',
  })
  readonly isActive: boolean;

  @ApiProperty({
    example: 'Confirm code',
  })
  readonly confirm_code: string;

  @ApiProperty({
    example: 'User created at',
  })
  readonly created_at: Date;
}
