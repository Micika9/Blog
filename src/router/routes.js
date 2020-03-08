import Home from '../components/Home'
import Login from '../components/Login'
import Register from '../components/Register'
import CreatePost from '../components/Create'
import Post from '../components/Post'
import MyPosts from '../components/MyPosts'

export default [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/post',
    name: 'Post',
    component: Post
  },
  {
    path: '/my-posts',
    name: 'MyPosts',
    component: MyPosts
  },
  {
    path: '/create',
    name: 'CreatePost',
    component: CreatePost
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '*',
    redirect: {
      name: 'Home'
    }
  }
]
