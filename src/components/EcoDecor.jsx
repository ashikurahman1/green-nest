import React from 'react';
import SectionHeading from './SectionHeading/SectionHeading';
import Container from './Container/Container';

const decorIdeas = [
  {
    id: 1,
    image: '/images/decor1.png',
    title: 'Boho Plant Corner',
    description:
      'Transform a dull corner into a lush sanctuary by mixing hanging plants like pothos and spider plants with floor pots placed inside woven baskets. Incorporate natural textures like rattan chairs, macramé hangers, and wooden stools to evoke a cozy, bohemian vibe that invites relaxation and creativity.',
  },
  {
    id: 2,
    image: '/images/decor2.png',
    title: 'Minimalist Desk Greens',
    description:
      'Bring life to your workspace by adding small succulents, air plants, or cacti that require minimal care but add vibrant green accents. Use sleek, modern pots in neutral tones to keep the look clean and uncluttered, helping boost your focus and productivity with a touch of nature’s calm.',
  },
  {
    id: 3,
    image: '/images/decor3.png',
    title: 'Hanging Garden',
    description:
      'Save floor space and add dimension to your room with a hanging garden. Utilize macramé plant hangers and floating shelves to display trailing ivies, string of pearls, and ferns at varying heights. This layered greenery creates a dynamic, airy environment that softens sharp edges and brings nature closer to eye level.',
  },
  {
    id: 4,
    image: '/images/decor4.png',
    title: 'Bathroom Oasis',
    description:
      'Turn your bathroom into a refreshing oasis by introducing humidity-loving plants such as Boston ferns, peace lilies, and air plants. These plants thrive in moist environments and help purify the air. Complement them with bamboo accessories, natural soaps, and soft lighting for a spa-like feel that rejuvenates both body and mind.',
  },
];
const EcoDecor = () => {
  return (
    <section>
      <Container>
        <SectionHeading title="Eco Decor Ideas" />

        <div className="px-4 lg:px-0 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {decorIdeas.map(({ id, image, title, description }) => (
            <div
              key={id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
            >
              {' '}
              <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover"
              />{' '}
              <div className="p-4">
                {' '}
                <h3 className="text-xl font-semibold text-green-700 mb-2">
                  {' '}
                  {title}{' '}
                </h3>{' '}
                <p className="text-gray-700">{description}</p>{' '}
              </div>{' '}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default EcoDecor;
