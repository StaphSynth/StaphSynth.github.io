require 'spec_helper'

describe 'common layout', type: :feature, js: true do
  before { visit '/' }

  it 'has the site heading' do
    expect(find('#heading').text).to eq("Synthetase's World of Nerd")
  end
end
