require 'html-proofer'

task :dev do
  sh 'bundle exec jekyll serve'
end

task :build do
  build
end

task :default do
  proofer_options = {
    swap_urls: {
      # forces the proofer to find the files locally rather than
      # trying to visit the live site for internal links
      /^https:\/\/syntheta.se\// => '/'
    },
    assume_extension: '.html',
    only_4xx: true,
    enforce_https: false,
    ignore_status_codes: [403, 405]
  }

  build
  puts 'Running tests...'
  HTMLProofer.check_directory('./_site', proofer_options).run
  puts 'Tests complete!'
end

def build
  puts 'Building site...'
  sh 'JEKYLL_ENV=production bundle exec jekyll build'
  puts 'Site successfully built.'
end
