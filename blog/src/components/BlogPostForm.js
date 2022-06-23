import React, { useState, useContext } from 'react'
import { View, Text, StyleSheet, Button, TextInput } from 'react-native'

const BlogPostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title)
  const [content, setContent] = useState(initialValues.content)

  return (
    <View>
      <Text style={styles.title}>Edit Post</Text>

      <Text style={styles.label}>Enter Title</Text>
      <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)} />
      <Text style={styles.label}>Enter Content</Text>
      <TextInput 
        style={styles.input} 
        value={content} 
        onChangeText={(text) => setContent(text)} />
      <Button 
        onPress={() => onSubmit(title, content)}
        title="Save" />
    </View>
  )
}

BlogPostForm.defaultProps = {
  initialValues: {
    title: '',
    content: '',
  }
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

export default BlogPostForm