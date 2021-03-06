const list_helper = require('../utils/list_helper');
const listHelper = require('../utils/list_helper');

const blogs = [ 
  { _id: "5a422a851b54a676234d17f7",
  title: "React patterns",
  author: "Michael Chan",
  url: "https://reactpatterns.com/",
  likes: 7,
  __v: 0 },

  { _id: "5a422aa71b54a676234d17f8",
  title: "Go To Statement Considered Harmful",
  author: "Edsger W. Dijkstra",
  url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
  likes: 5,
  __v: 0 },
  
  { _id: "5a422b3a1b54a676234d17f9",
  title: "Canonical string reduction",
  author: "Edsger W. Dijkstra",
  url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html", likes: 12,
  __v: 0 },
  
  { _id: "5a422b891b54a676234d17fa",
  title: "First class tests",
  author: "Robert C. Martin",
  url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
  likes: 10,
  __v: 0 },
  
  { _id: "5a422ba71b54a676234d17fb",
  title: "TDD harms architecture",
  author: "Robert C. Martin",
  url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
  likes: 0,
  __v: 0 },
  
  { _id: "5a422bc61b54a676234d17fc",
  title: "Type wars",
  author: "Robert C. Martin",
  url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
  likes: 2,
  __v: 0 }
]

const listWithFourBlogs = [
  { _id: "5a422a851b54a676234d17f7",
  title: "React patterns",
  author: "Michael Chan",
  url: "https://reactpatterns.com/",
  likes: 7,
  __v: 0 },

  { _id: "5a422aa71b54a676234d17f8",
  title: "Go To Statement Considered Harmful",
  author: "Edsger W. Dijkstra",
  url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
  likes: 5,
  __v: 0 },
  
  { _id: "5a422b3a1b54a676234d17f9",
  title: "Canonical string reduction",
  author: "Edsger W. Dijkstra",
  url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html", likes: 12,
  __v: 0 },
  
  { _id: "5a422b891b54a676234d17fa",
  title: "First class tests",
  author: "Robert C. Martin",
  url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
  likes: 10,
  __v: 0 }
]

const listWithOneBlog = [
  {
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 5,
    __v: 0
  }
]

test('dummy returns one', () => {
  const blogs = []

  const result = listHelper.dummy(blogs)
  expect(result).toBe(1)
})


describe('total likes of', () => {

  test('of total likes of one blog', () => {
    expect(listHelper.totalLikes(listWithOneBlog)).toBe(5)
  });

  test('of total likes of 4 blogs', () => {
    expect(listHelper.totalLikes(listWithFourBlogs)).toBe(34)
  })

  test('of all 7 blogs in total', () => {
    expect(list_helper.totalLikes(blogs)).toBe(36)
  })
});


describe('maximun likes of', () => {
  test('of maximum likes in 1 blog', () => {
    const result = list_helper.favouriteBlog(listWithOneBlog);
    expect(result).toEqual({
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      likes: 5
    })
  });

  test('of maximum likes in 4 blogs', () => {
    const result = list_helper.favouriteBlog(listWithFourBlogs);
    expect(result).toEqual({
      title: "Canonical string reduction",
      author: "Edsger W. Dijkstra",
      likes: 12
    })
  });

  test('of maximum likes in all blogs', () => {
    const result = list_helper.favouriteBlog(blogs);

    expect(result).toEqual({
      title: "Canonical string reduction",
      author: "Edsger W. Dijkstra",
      likes: 12
    })
  })
});

describe('author with highest number of blogs', () => {
  test('of highest number of blogs in 1 blog', () => {
    const result = list_helper.mostBlogs(listWithOneBlog)
    expect(result).toEqual({
      author: 'Edsger W. Dijkstra',
      blogs: 1
    })
  });

  test('of highest number of blogs in 4 blogs', () => {
    const result = list_helper.mostBlogs(listWithFourBlogs)
    expect(result).toEqual({
      author: "Edsger W. Dijkstra",
      blogs: 2
    })
  })
});

test('of highest number of blogs in all blogs', () => {
  const result = list_helper.mostBlogs(blogs)
  expect(result).toEqual({
    author: "Robert C. Martin",
    blogs: 3
  })
});


describe('author with highest number of blogs', () => {
  test('of highest number of blogs in 1 blog', () => {
    const result = list_helper.mostLikes(listWithOneBlog)
    expect(result).toEqual({
      author: 'Edsger W. Dijkstra',
      likes: 5
    })
  });

  test('of highest number of blogs in 4 blogs', () => {
    const result = list_helper.mostLikes(listWithFourBlogs)
    expect(result).toEqual({
      author: "Edsger W. Dijkstra",
      likes: 17
    })
  })
});

test('of highest number of blogs in all blogs', () => {
  const result = list_helper.mostLikes(blogs)
  expect(result).toEqual({
    author: "Edsger W. Dijkstra",
    likes: 17
  })
})