import AdminJS from 'adminjs'
import AdminJSExpress from '@adminjs/express'
import * as AdminJSSequelize from '@adminjs/sequelize'
import express from 'express'
import { Sequelize, DataTypes } from 'sequelize'

AdminJS.registerAdapter({
  Resource: AdminJSSequelize.Resource,
  Database: AdminJSSequelize.Database,
})

const sequelize = new Sequelize('mydatabase', 'myadmin', 'mypassword', {
  host: process.env.NODE_ENV === 'production' ? 'db' : 'localhost',
  dialect: 'postgres',
  logging: false
})

const User = sequelize.define('User', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

const start = async () => {
  try {
    const app = express()
    
    const admin = new AdminJS({
      resources: [User],
      rootPath: '/admin',
      branding: {
        companyName: 'My Dashboard'
      }
    })

    const router = AdminJSExpress.buildRouter(admin)
    app.use(admin.options.rootPath, router)

    // Test database connection
    await sequelize.authenticate()
    console.log('Database connection established successfully.')
    
    // Sync database models
    await sequelize.sync()
    console.log('Database models synced.')
    
    app.listen(3000, () => {
      console.log('AdminJS started on http://localhost:3000/admin')
    })
    
  } catch (error) {
    console.error('Error starting the application:', error)
  }
}

start()