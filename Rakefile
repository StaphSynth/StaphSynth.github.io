require 'html-proofer'

task :build do
  build
end

task :test do
  options = {
    assume_extension: true,
    only_4xx: true
  }

  build
  puts 'Running tests...'
  HTMLProofer.check_directory('./_site', options).run
  puts 'Tests complete!'
end

def build
  puts 'Building site...'
  sh 'JEKYLL_ENV=production bundle exec jekyll build'
  puts 'Site successfully built.'
end
