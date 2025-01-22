# 使用官方的 Node 镜像作为基础镜像
FROM docker.m.daocloud.io/node:20

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json 到工作目录
COPY package*.json ./

# 安装pnpm
RUN npm install -g pnpm

# 安装项目依赖
RUN pnpm install

# 复制整个项目到工作目录
COPY . .

# 构建 Nuxt 项目
RUN npm run build

# 暴露容器的端口，Nuxt 默认端口为 3000
EXPOSE 3000

# 启动 Nuxt 项目
CMD ["npm", "start"]
