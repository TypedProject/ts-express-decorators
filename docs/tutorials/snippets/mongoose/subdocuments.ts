import {CollectionOf, Property} from "@tsed/schema";
import {Model, ObjectID, Schema} from "@tsed/mongoose";

@Schema()
export class MySchema {
  @ObjectID("id")
  _id: string;

  @Property()
  name: string;
}

@Model()
export class MyModel {
  @ObjectID("id")
  _id: string;

  @Property()
  schema: MySchema;

  @CollectionOf(MySchema)
  schemes: MySchema[];
}
