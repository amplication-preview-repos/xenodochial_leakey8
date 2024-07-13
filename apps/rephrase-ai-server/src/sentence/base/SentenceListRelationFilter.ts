/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SentenceWhereInput } from "./SentenceWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SentenceListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SentenceWhereInput,
  })
  @ValidateNested()
  @Type(() => SentenceWhereInput)
  @IsOptional()
  @Field(() => SentenceWhereInput, {
    nullable: true,
  })
  every?: SentenceWhereInput;

  @ApiProperty({
    required: false,
    type: () => SentenceWhereInput,
  })
  @ValidateNested()
  @Type(() => SentenceWhereInput)
  @IsOptional()
  @Field(() => SentenceWhereInput, {
    nullable: true,
  })
  some?: SentenceWhereInput;

  @ApiProperty({
    required: false,
    type: () => SentenceWhereInput,
  })
  @ValidateNested()
  @Type(() => SentenceWhereInput)
  @IsOptional()
  @Field(() => SentenceWhereInput, {
    nullable: true,
  })
  none?: SentenceWhereInput;
}
export { SentenceListRelationFilter as SentenceListRelationFilter };
