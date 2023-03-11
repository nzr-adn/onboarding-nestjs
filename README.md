## Command
nest new my-nest-project
nest g mo => Generate Module
nest g co --no-spec => Generate Controller
nest g s --no-spec => Generate Service
nest g resource => Generate (Module,Service,Controller)


## Auth
yarn add @nestjs/passport passport passport-local
yarn add -D @types/passport-local
yarn add @nestjs/jwt passport-jwt
yarn add -D @types/passport-jwt

## Validation
yarn add class-validator class-transformer

## Task Scheduling
yarn add @nestjs/schedule
yarn add -D @types/cron

## Call API External
yarn add @nestjs/axios axios
