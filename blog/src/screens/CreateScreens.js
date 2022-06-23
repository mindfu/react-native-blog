import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import BlogPostForm from '../components/BlogPostForm'
import { Context } from '../context/BlogContext'

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context)

  return <BlogPostForm onSubmit={(title, content) => {
    addBlogPost(title, content, () => navigation.navigate('Index'))
  }} />
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 20,
    marginTop: 10,
    marginLeft: 10,
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'grey',
    marginBottom: 15,
    padding: 5,
    margin: 10,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 10,
  },
})

export default CreateScreen
