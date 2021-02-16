/*
import mongoose from 'mongoose'

interface intTest {
  title: string;
  description: string;
}

interface testModelInterface extends mongoose.Model<TestDoc> {
  build(attr: intTest): TestDoc
}

interface TestDoc extends mongoose.Document {
  title: string;
  description: string;
}

const testSchema = new mongoose.Schema({
  titles: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})

testSchema.statics.build = (attr: intTest) => {
  return new Test(attr)
}

const Test = mongoose.model<TestDoc, testModelInterface>('Test', testSchema)

Test.build({
  title: "Test Title",
  description: "Test Description"
})

export { Test }
*/