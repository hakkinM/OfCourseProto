import { createReview, createUser, clearTable } from "./db";
import { Review, User } from "@/app/types/types";

/**
 * This file can be ran to create test data.
 */

export const testUsers: User[] = [
  {
    userID: 1,
    email: "velho@mail.com",
    username: "MatikkaVelho",
    password: "velho",
  },
  {
    userID: 2,
    email: "kettu91@example.com",
    username: "kettu91", // "fox"
    password: "salasana123",
  },
  {
    userID: 3,
    email: "satumetsae@example.com",
    username: "satumetsae", // "fairy forest"
    password: "turva456",
  },
  {
    userID: 4,
    email: "tahti_89@example.com",
    username: "tahti_89", // "star"
    password: "vahva789",
  },
  {
    userID: 5,
    email: "jokipoika@example.com",
    username: "jokipoika", // "river boy"
    password: "testi000",
  },
  {
    userID: 6,
    email: "hiljainenyksi@example.com",
    username: "hiljainenyksi", // "quiet one"
    password: "demo321",
  },
];


export const testReviews: Review[] = [
  {
    reviewID: 2,
    pageID: 123,
    authorID: 1,
    overall: 4,
    methods: 5,
    workload: 3,
    difficulty: 4,
    comment: "Hyvin jäsennelty kokonaisuus. Paljon kaavoja, mutta opetustapa oli selkeä.",
    likes: 2,
  },
  {
    reviewID: 3,
    pageID: 123,
    authorID: 2,
    overall: 3,
    methods: 3,
    workload: 4,
    difficulty: 4,
    comment: "Työläs kokonaisuus, mutta opin paljon integraaleista ja differentiaaleista.",
    likes: 1,
  },
  {
    reviewID: 4,
    pageID: 123,
    authorID: 3,
    overall: 5,
    methods: 5,
    workload: 2,
    difficulty: 3,
    comment: "Erittäin kiinnostava kurssikokonaisuus! Hyvät materiaalit ja opetus.",
    likes: 4,
  },
  {
    reviewID: 5,
    pageID: 123,
    authorID: 4,
    overall: 2,
    methods: 2,
    workload: 5,
    difficulty: 5,
    comment: "Vaikea kokonaisuus ilman hyvää taustaa. Työtä sai tehdä todella paljon.",
    likes: 0,
  },
  {
    reviewID: 6,
    pageID: 123,
    authorID: 5,
    overall: 4,
    methods: 4,
    workload: 3,
    difficulty: 3,
    comment: "Hyvä johdanto matematiikan syventäviin aiheisiin. Suosittelen!",
    likes: 3,
  },
  {
    reviewID: 7,
    pageID: 124,
    authorID: 2,
    overall: 4,
    methods: 4,
    workload: 3,
    difficulty: 4,
    comment: "Derivaatat alkoivat tuntua helpoilta lopulta. Integraalit vaativat enemmän aikaa.",
    likes: 2,
  },
  {
    reviewID: 8,
    pageID: 124,
    authorID: 3,
    overall: 5,
    methods: 5,
    workload: 2,
    difficulty: 3,
    comment: "Erinomaiset esimerkit ja harjoitukset. Selkeytti paljon abstrakteja asioita.",
    likes: 5,
  },
  {
    reviewID: 9,
    pageID: 124,
    authorID: 2,
    overall: 3,
    methods: 3,
    workload: 4,
    difficulty: 4,
    comment: "Opetus oli hieman nopeaa, mutta laskuharjoitukset auttoivat paljon.",
    likes: 1,
  },
  {
    reviewID: 10,
    pageID: 124,
    authorID: 4,
    overall: 2,
    methods: 2,
    workload: 5,
    difficulty: 5,
    comment: "Kurssi oli todella haastava. Ilman aiempaa kokemusta vaikea pysyä mukana.",
    likes: 0,
  },
  {
    reviewID: 10,
    pageID: 124,
    authorID: 5,
    overall: 4,
    methods: 4,
    workload: 3,
    difficulty: 3,
    comment: "Hyvä kokonaisuus, mutta integraalilaskennan osuus olisi voinut olla laajempi.",
    likes: 2,
  },
];


// CHECK IF USER HAS ALREADY CREATED TEST DATA!!
// If test data is created twice, the console will be ridden with mystical errors.

async function create() {
  console.log("Creating test data");
  clearTable("Users");
  clearTable("Reviews");
  for (var user of testUsers) {
    await createUser(user);
  }
  for (var review of testReviews) {
    await createReview(review);
  }
  console.log("Test data created.");
}

create();


/**
interface Comment {
  userID: number;
  postID: number;
  commentHeader: string;
  userEmail: string;
  comment: string;
}

export async function InitData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/comments')
  const comments: Comment[] = await response.json()

  const createScore = () => {
    return Math.floor(Math.random() * 5) + 1;
  };

  return (
    comments.forEach(comment =>
      createReview({
        reviewID: comment.postID,
        courseID: 1,
        authorID: comment.userID,
        overall: createScore(),
        methods: createScore(),
        workload: createScore(),
        difficulty: createScore(),
        comment: comment.comment,
        likes: 0
      })
    )
  )


}


    reviewID: comment.postID
    courseID: 1
    authorID: comment.userID
    overall: createScore()
    methods: createScore()
    workload: createScore()
    difficulty: createScore()
    comment: comment.comment
    likes: 0
*/
