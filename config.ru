require 'yaml'
require 'rack/jekyll'
require 'rack'

run Rack::Jekyll.new force_build: true
