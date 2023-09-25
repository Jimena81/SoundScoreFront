/* eslint-disable no-undef */

import { render } from '@testing-library/react';
import Footer from '../components/atoms/footer/Footer';

describe('Footer Component', () => {
  it('renders correctly', () => {
    const { getByText, getByAltText } = render(<Footer />);
    
    // Comprueba que se muestra el enlace a NewReleases
    const newReleasesLink = getByText('Home');
    expect(newReleasesLink).toBeInTheDocument();
    expect(newReleasesLink.getAttribute('href')).toBe('/NewReleases');

    // Comprueba que se muestra el enlace a Favourites
    const favoritesLink = getByText('Favorites');
    expect(favoritesLink).toBeInTheDocument();
    expect(favoritesLink.getAttribute('href')).toBe('/Favourites');

    // Comprueba que se muestra el enlace a AllReviews
    const allReviewsLink = getByText('Reviews');
    expect(allReviewsLink).toBeInTheDocument();
    expect(allReviewsLink.getAttribute('href')).toBe('/AllReviews');

    // Comprueba que se muestran las imágenes
    const homeImage = getByAltText('Home');
    expect(homeImage).toBeInTheDocument();

    const favoritesImage = getByAltText('Favorites');
    expect(favoritesImage).toBeInTheDocument();

    const reviewsImage = getByAltText('Reviews');
    expect(reviewsImage).toBeInTheDocument();
  });
});
