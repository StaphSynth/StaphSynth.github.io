require 'spec_helper'

describe 'home page', type: :feature, js: true do
  before { visit '/' }

  it 'has the site heading' do
    expect(find('#heading').text).to eq("Synthetase's World of Nerd")
  end

  it 'has the welcome message' do
    expect(page).to have_text('Welcome')
  end

  describe 'post list' do
    it 'has latest posts' do
      expect(find_all('.articleListItem').count).to eq 2
    end
  end
end
