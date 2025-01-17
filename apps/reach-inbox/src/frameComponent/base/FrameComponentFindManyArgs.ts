/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FrameComponentWhereInput } from "./FrameComponentWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { FrameComponentOrderByInput } from "./FrameComponentOrderByInput";

@ArgsType()
class FrameComponentFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => FrameComponentWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => FrameComponentWhereInput, { nullable: true })
  @Type(() => FrameComponentWhereInput)
  where?: FrameComponentWhereInput;

  @ApiProperty({
    required: false,
    type: [FrameComponentOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [FrameComponentOrderByInput], { nullable: true })
  @Type(() => FrameComponentOrderByInput)
  orderBy?: Array<FrameComponentOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { FrameComponentFindManyArgs as FrameComponentFindManyArgs };
