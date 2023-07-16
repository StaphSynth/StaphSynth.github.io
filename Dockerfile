FROM ruby:3.1.3

RUN apt-get update && apt-get install nodejs -y
RUN bundle config --global frozen 1

WORKDIR /usr/blog

COPY Gemfile Gemfile.lock ./
RUN bundle install

COPY . .

CMD jekyll serve --watch

EXPOSE 4000
