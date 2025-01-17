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
import { MailItemWhereUniqueInput } from "./MailItemWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class MailItemFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => MailItemWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MailItemWhereUniqueInput)
  @Field(() => MailItemWhereUniqueInput, { nullable: false })
  where!: MailItemWhereUniqueInput;
}

export { MailItemFindUniqueArgs as MailItemFindUniqueArgs };
