export const site = {
  name: 'Ride With Carlos',
  description:
    'Airport transfers, group rides, and long-distance taxi service in the NYC area.',
  phone: {
    e164: '+15551234567',
    display: '(555) 123-4567',
  },
  email: 'info@ridewithcarlos.com',
  location: 'New York, NY',
  year: 2026,
};

export const siteLinks = {
  phone: `tel:${site.phone.e164}`,
  email: `mailto:${site.email}`,
};
