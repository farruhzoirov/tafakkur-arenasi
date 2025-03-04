import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true })
  email: string;

  @Prop({ default: 0 })
  score: number;

  @Prop({ default: 1 })
  level: number;

  @Prop({ default: false })
  isPlaying: boolean;

  @Prop({ required: true })
  image: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
