import getUsersOfCurrentPage from "./util"

const users = [
    {
        "id": 71,
        "last_name": "bacca",
        "first_name": "chew",
        "status": "active",
        "created_at": "2022-01-11T23:56:59.828Z",
        "updated_at": "2022-03-28T21:15:23.190Z",
        "url": "https://assessment-users-backend.herokuapp.com/users/71.json"
    },
    {
        "id": 15,
        "last_name": "d",
        "first_name": "Darron",
        "status": "active",
        "created_at": "2022-01-04T16:00:44.009Z",
        "updated_at": "2022-03-28T13:38:35.237Z",
        "url": "https://assessment-users-backend.herokuapp.com/users/15.json"
    },
    {
        "id": 239,
        "last_name": "Wick",
        "first_name": "John",
        "status": "active",
        "created_at": "2022-03-05T11:40:04.005Z",
        "updated_at": "2022-03-16T14:34:10.730Z",
        "url": "https://assessment-users-backend.herokuapp.com/users/239.json"
    },
    {
        "id": 192,
        "last_name": "Atwood",
        "first_name": "Margaret",
        "status": "locked",
        "created_at": "2022-02-27T17:12:27.892Z",
        "updated_at": "2022-03-28T16:47:46.861Z",
        "url": "https://assessment-users-backend.herokuapp.com/users/192.json"
    },
    {
        "id": 265,
        "last_name": "Boy",
        "first_name": "Frank",
        "status": "active",
        "created_at": "2022-03-12T19:01:40.523Z",
        "updated_at": "2022-03-25T01:55:45.187Z",
        "url": "https://assessment-users-backend.herokuapp.com/users/265.json"
    },
    {
        "id": 74,
        "last_name": "Mundo",
        "first_name": "Olá",
        "status": "locked",
        "created_at": "2022-01-11T23:57:04.041Z",
        "updated_at": "2022-03-25T01:55:50.166Z",
        "url": "https://assessment-users-backend.herokuapp.com/users/74.json"
    },
    {
        "id": 77,
        "last_name": "Monkey",
        "first_name": "Spider",
        "status": "locked",
        "created_at": "2022-01-11T23:57:30.961Z",
        "updated_at": "2022-03-25T01:27:27.550Z",
        "url": "https://assessment-users-backend.herokuapp.com/users/77.json"
    },
    {
        "id": 230,
        "last_name": "Pista",
        "first_name": "Joska",
        "status": "active",
        "created_at": "2022-03-05T07:51:01.678Z",
        "updated_at": "2022-03-28T13:38:44.591Z",
        "url": "https://assessment-users-backend.herokuapp.com/users/230.json"
    },
    {
        "id": 221,
        "last_name": "Zoli",
        "first_name": "Kis",
        "status": "active",
        "created_at": "2022-03-03T18:20:43.820Z",
        "updated_at": "2022-03-28T14:09:51.560Z",
        "url": "https://assessment-users-backend.herokuapp.com/users/221.json"
    },
    {
        "id": 193,
        "last_name": "Silva",
        "first_name": "Joao2",
        "status": "locked",
        "created_at": "2022-02-28T11:43:38.745Z",
        "updated_at": "2022-03-28T14:09:54.606Z",
        "url": "https://assessment-users-backend.herokuapp.com/users/193.json"
    },
    {
        "id": 250,
        "last_name": "adsda",
        "first_name": "dasdasda",
        "status": "locked",
        "created_at": "2022-03-06T12:49:46.085Z",
        "updated_at": "2022-03-28T14:53:50.928Z",
        "url": "https://assessment-users-backend.herokuapp.com/users/250.json"
    },
    {
        "id": 178,
        "last_name": "Liskov",
        "first_name": "Barbara",
        "status": "active",
        "created_at": "2022-02-23T00:21:29.527Z",
        "updated_at": "2022-03-16T14:17:33.563Z",
        "url": "https://assessment-users-backend.herokuapp.com/users/178.json"
    },
    {
        "id": 246,
        "last_name": "uu",
        "first_name": "uuuu",
        "status": "active",
        "created_at": "2022-03-06T09:10:10.156Z",
        "updated_at": "2022-03-16T14:02:56.248Z",
        "url": "https://assessment-users-backend.herokuapp.com/users/246.json"
    },
    {
        "id": 154,
        "last_name": "Vrunda",
        "first_name": "Vrunda",
        "status": "active",
        "created_at": "2022-02-15T11:53:19.448Z",
        "updated_at": "2022-03-16T14:16:24.418Z",
        "url": "https://assessment-users-backend.herokuapp.com/users/154.json"
    },
    {
        "id": 78,
        "last_name": "updated",
        "first_name": "Ryann ",
        "status": "locked",
        "created_at": "2022-01-11T23:57:30.968Z",
        "updated_at": "2022-03-25T01:55:05.651Z",
        "url": "https://assessment-users-backend.herokuapp.com/users/78.json"
    },
    {
        "id": 132,
        "last_name": "Doncic888",
        "first_name": "Luka",
        "status": "active",
        "created_at": "2022-02-06T09:28:31.052Z",
        "updated_at": "2022-03-16T14:28:46.436Z",
        "url": "https://assessment-users-backend.herokuapp.com/users/132.json"
    }
]

test("page 1 returns 10 users from a 16 length list", () => {
    expect(getUsersOfCurrentPage(users, 1, 10).length).toBe(10)
})

test("page 2 returns 6 users from a 16 length list", () => {
    expect(getUsersOfCurrentPage(users, 2, 10).length).toBe(6)
})