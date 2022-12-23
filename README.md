# Gundam Characters
使用Express、Node.js結合Mysql打造出來一個簡單的圖鑑網站。

# 登入畫面
![image](/public/images/Characters-1.PNG.jpg)
# 使用者頁面
![image](/public/images/Characters-2.PNG.jpg)
# 後台頁面
![image](/public/images/Characters-3.PNG.jpg)

## 產品功能
* 有屬於管理者的後台頁面。
* 管理者可以瀏覽使用者頁面的狀況。
* 管理者可以新增角色資料。
* 管理者可以瀏覽角色資料。
* 管理者可以編輯角色資料。
* 管理者可以刪除角色資料。
* 管理者可以新增作品系列資料。
* 管理者可以刪除作品系列資料。
* 使用者必須登入才可使用。
* 使用者可以註冊帳號。
* 使用者可以瀏覽自己的個人資料。
* 使用者可以編輯自己的個人資料。
* 使用者可以瀏覽不同的角色資料。
* 使用者可以透過查詢功能查詢自己想要的角色資料。
* 使用者可以點選系列作品按鈕篩選對應系列作品的角色資料。
* 使用者可以喜愛角色資料。
* 使用者可以在個人資料頁面瀏覽自己曾經喜愛過的角色資料。
* 使用者可以在人氣收藏頁面觀看最多人收藏的角色資料前10名的收藏數。

## 環境建置
* express: ^4.18.1
* express-handlebars: ^6.0.6
* express-session: ^1.17.3
* mysql2: ^2.3.3
* passport: ^0.6.0
* passport-local: ^1.0.0
* passport-facebook: ^3.0.0
* sequelize: ^6.21.6
* sequelize-cli: ^6.4.1
* bcryptjs: ^2.4.3
* dotenv: ^8.2.0
* multer: ^1.4.3
* imgur: ^1.0.2
* method-override: ^3.0.0
* connect-flash: ^0.1.1

## 專案安裝
1. 下載專案
```
git clone https://github.com/ZinXianY/project-side.git
```

2. 切換存放此專案資料夾
```
cd project-side
```

3. 安裝npm套件
```
npm install
```

4. 創建資料庫
```
create database project_side
```

5. 建立 migration
```
npx sequelize db:migrate
```

6. 建立 seeder
```
npx sequelize db:seed:all
```

7. 啟動伺服器
```
npm run dev
```

8. 出現以下字樣表示啟動成功!
```
App is running on http://localhost:3000
```

## 測試帳號
* 管理者帳號: root@example.com, 密碼: 123456
* 使用者帳號-1: user1@example.com, 密碼: 123456
* 使用者帳號-2: user2@example.com, 密碼: 123456