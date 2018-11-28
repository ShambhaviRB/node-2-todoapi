const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//    console.log(result);
// });

// Todo.findOneAndRemove({_id: '5bfe302f13a324aa0d138a88'}).then((todo) => {

// });

Todo.findByIdAndRemove('5bfe302f13a324aa0d138a88').then((todo) => {
    console.log(todo);
});