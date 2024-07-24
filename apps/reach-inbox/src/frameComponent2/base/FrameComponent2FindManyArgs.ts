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
import { FrameComponent2WhereInput } from "./FrameComponent2WhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { FrameComponent2OrderByInput } from "./FrameComponent2OrderByInput";

@ArgsType()
class FrameComponent2FindManyArgs {
  @ApiProperty({
    required: false,
    type: () => FrameComponent2WhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => FrameComponent2WhereInput, { nullable: true })
  @Type(() => FrameComponent2WhereInput)
  where?: FrameComponent2WhereInput;

  @ApiProperty({
    required: false,
    type: [FrameComponent2OrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [FrameComponent2OrderByInput], { nullable: true })
  @Type(() => FrameComponent2OrderByInput)
  orderBy?: Array<FrameComponent2OrderByInput>;

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

export { FrameComponent2FindManyArgs as FrameComponent2FindManyArgs };
