///////////////////////////////////////////////////////////////////////////////

const baseArray = [
  {
    id: 1,
    name: "John",
    age: 30,
    post_id: 1,
    post_title: "first post",
  },
  {
    id: 1,
    name: "John",
    age: 30,
    post_id: 2,
    post_title: "second post",
  },
  {
    id: 3,
    name: "Mark",
    age: 35,
    post_id: 3,
    post_title: "third post",
  },
];
// make new array from baseArray each user have post array with post_id and post_title
const newArray = baseArray.reduce((acc, item) => {
  const { id, name, age, post_id, post_title } = item;
  const user = acc.find((user) => user.id === id);
  if (user) {
    user.posts.push({ id: post_id, title: post_title });
  } else {
    acc.push({
      id,
      name,
      age,
      posts: [{ post_id: post_id, title: post_title }],
    });
  }
  return acc;
}, []);
// Json stringify to show newArray
//console.log(JSON.stringify(newArray, null, 2));

////////////////////////////////////////////////////////////////////////////////
const postsArray = [
  {
    id: 1,
    title: "first post",
    content: "first post content",
    user_id: 1,
    user_name: "John",
    like: 7,
    comment_id: 1,
    comment_content: "first comment",
    comment_user_id: 1,
    comment_user_name: "John",
  },
  {
    id: 1,
    title: "first post",
    content: "first post content",
    user_id: 1,
    user_name: "John",
    like: 3,
    comment_id: 2,
    comment_content: "second comment",
    comment_user_id: 1,
    comment_user_name: "John",
  },
  {
    id: 3,
    title: "third post",
    content: "third post content",
    user_id: 3,
    user_name: "Mark",
    like: 1,
    comment_id: 3,
    comment_content: "third comment",
    comment_user_id: 3,
    comment_user_name: "Mark",
  },
];

//create new Post array from postsArray that has id, title, content, user_id, user_name, like and comment array with comment_id, comment_content, comment_user_id and comment_user_name
const newPostArray = postsArray.reduce((acc, item) => {
  const {
    id,
    title,
    content,
    user_id,
    user_name,
    like,
    comment_id,
    comment_content,
    comment_user_id,
    comment_user_name,
  } = item;
  const post = acc.find((post) => post.id === id);
  if (post) {
    post.comments.push({
      id: comment_id,
      content: comment_content,
      user_id: comment_user_id,
      user_name: comment_user_name,
    });
  } else {
    acc.push({
      id,
      title,
      content,
      user_id,
      user_name,
      like,
      comments: [
        {
          id: comment_id,
          content: comment_content,
          user_id: comment_user_id,
          user_name: comment_user_name,
        },
      ],
    });
  }
  return acc;
}, []);
// Json stringify to show newPostArray
//console.log(JSON.stringify(newPostArray, null, 2));

////////////////////////////////////////////////////////////////////////////////

const events = [
  {
    id: 1,
    name: "Event 1",
    date: "2020-01-01",
    time: "10:00",
    location: "Location 1",
    description: "Description 1",
    image: "image 1",
  },
  {
    id: 2,
    name: "Event 2",
    date: "2020-01-02",
    time: "10:00",
    location: "Location 2",
    description: "Description 2",
    image: "image 2",
  },
  {
    id: 3,
    name: "Event 3",
    date: "2020-01-03",
    time: "10:00",
    location: "Location 3",
    description: "Description 3",
    image: "image 3",
  },
  {
    id: 4,
    name: "Event 4",
    date: "2020-01-04",
    time: "10:00",
    location: "Location 4",
    description: "Description 4",
    image: "image 4",
  },
  {
    id: 5,
    name: "Event 5",
    date: "2020-01-05",
    time: "10:00",
    location: "Location 5",
    description: "Description 5",
    image: "image 5",
  },
];

const artists = [
  {
    id: 1,
    name: "Artist 1",
    description: "Description 1",
    image: "image 1",
  },
  {
    id: 2,
    name: "Artist 2",
    description: "Description 2",
    image: "image 2",
  },
  {
    id: 3,
    name: "Artist 3",
    description: "Description 3",
    image: "image 3",
  },
  {
    id: 4,
    name: "Artist 4",
    description: "Description 4",
    image: "image 4",
  },
];

const relation = [
  {
    event_id: 1,
    artist_id: 1,
  },
  {
    event_id: 1,
    artist_id: 2,
  },
  {
    event_id: 1,
    artist_id: 3,
  },

  {
    event_id: 2,
    artist_id: 2,
  },
  {
    event_id: 2,
    artist_id: 3,
  },
  {
    event_id: 3,
    artist_id: 3,
  },
  {
    event_id: 3,
    artist_id: 4,
  },
];

// make new array from relation and events and artists that has event_id, event_name, event_date, event_time, event_location, event_description, event_image and artist array that has artist_id, artist_name, artist_description, artist_image
const newRelationArray = relation.reduce((acc, item) => {
    const { event_id, artist_id } = item;
    const event = acc.find((event) => event.event_id === event_id);
    if (event) {
        event.artists.push({
        artist_id,
        artist_name: artists.find((artist) => artist.id === artist_id).name,
        artist_description: artists.find((artist) => artist.id === artist_id).description,
        artist_image: artists.find((artist) => artist.id === artist_id).image,
        
        });
    } else {
        acc.push({
        event_id,
        event_name: events.find((event) => event.id === event_id).name,
        event_date: events.find((event) => event.id === event_id).date,
        event_time: events.find((event) => event.id === event_id).time,
        event_location: events.find((event) => event.id === event_id).location,
        event_description: events.find((event) => event.id === event_id).description,
        event_image: events.find((event) => event.id === event_id).image,
        artists: [
            {
            artist_id,
            artist_name: artists.find((artist) => artist.id === artist_id).name,
            artist_description: artists.find((artist) => artist.id === artist_id).description,
            artist_image: artists.find((artist) => artist.id === artist_id).image
            },
        ],
        });
    }
    return acc;
    }
    , []);

    console.log(JSON.stringify(newRelationArray, null, 2));