require 'html-proofer'

task :build do
  build
end

task :default do
  proofer_options = {
    internal_domains: ['syntheta.se'],
    assume_extension: true,
    # check_html: true,
    only_4xx: true,
    http_status_ignore: [403],
    cache: {
      timeframe: '6w'
    }
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
