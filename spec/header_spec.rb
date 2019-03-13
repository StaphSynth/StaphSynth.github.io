describe 'site header', type: :feature do
  describe 'the title' do

    it 'has the correct page title' do
      visit '/'

      expect(find('#heading h1').text).to eq("Synthetase's World of Nerd")
    end

    describe 'the nav section' do
      NAV_LINKS = {
        'Home' => '/',
        'Coding' => '/coding/',
        'Projects' => '/projects/',
        'About' => '/about/'
      }

      describe 'the link structure' do
        links = nil

        before do
          visit '/'
          links = find_all('#main-menu li a')
        end

        it 'has the correct number of links' do
          expect(links.count).to eq 4
        end

        it 'has links that point to the correct pages' do
          links.each do |link|
            expect(NAV_LINKS[link.text]).to eq(link['href'])
          end
        end
      end
    end
  end
end
