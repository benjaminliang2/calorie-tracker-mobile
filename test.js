import { Amplify, API, Auth } from "aws-amplify";
import awsconfig from "./src/aws-exports.js";
Amplify.configure(awsconfig);


const createEntry = async () => {
  API.post("nutritionAPI", "/items", {
    body: {
      dateID: "testingDate",
      userID: "testingID"
    },
    headers: {
      Authorization: `Bearer ${(await Auth.currentSession())
        .getIdToken()
        .getJwtToken()}`
    }
  })
    .then((result) => {
      // console.log(JSON.parse(result));
    })
    .catch((err) => {
      console.log(err);
    });
};

const signUp = async () => {
  Auth.signUp({
    username: 'test@test.com',
    password: 'testpassword',
    attributes: {
      email: 'test@test.com', // optional
      name: 'testname',
    },
    validationData: [], // optional
  })
  .then((data) => {
    console.log(data)
  })
  .catch((err) => {
    console.log(err)
  })
};

const signIn = async () => {
  Auth.signIn('test@test.com', 'testpassword')
  .then((data) => {
    console.log(data)
    createEntry()
  })
  .catch((err) => {
    console.log(err)
  })
}

// signUp()
const test = async () => {
  console.log("start")
  await signIn()
  console.log("finish")
}



createEntry()
