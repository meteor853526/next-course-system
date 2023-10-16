/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, 
  images : { 
    domains : ['cdn.builder.io'] 
  } 
}
module.exports = {
    env: {
      'MYSQL_HOST': '35.229.163.235',
      'MYSQL_PORT': '3306',
      'MYSQL_DATABASE': 'CourseSystem',
      'MYSQL_USER': 'class3',
      'MYSQL_PASSWORD': '123456789',
    }
  }
module.exports = nextConfig
