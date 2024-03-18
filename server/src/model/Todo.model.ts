import { DataTypes, Model } from 'sequelize';
import sequelize from '../connection';
class Todo extends Model {}

Todo.init({
 id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
 },
 task: {
    type: DataTypes.STRING,
    allowNull: false
 }
}, {
   sequelize: sequelize,
   modelName: 'todo',
   freezeTableName: true,
   underscored: true
})
export default Todo;