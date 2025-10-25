import React from 'react';

export const NapBlock = ({ contact }: { contact: any }) => (
  <address style={{lineHeight: '1.6', fontStyle: 'normal'}}>
    <strong>{contact.mainContact}</strong><br />
    {contact.address.street}<br />
    {contact.address.city}, {contact.address.state} {contact.address.postalCode}<br />
    <a href={`tel:${contact.phone.replace(/[^\d+]/g, '')}`}>{contact.phone}</a><br />
    <a href={`mailto:${contact.email}`}>{contact.email}</a>
  </address>
);
