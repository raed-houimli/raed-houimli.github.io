import sharp from 'sharp';
import path from 'path';

async function generateFavicon() {
  const input = path.join(process.cwd(), 'public/profile.jpg');
  const output = path.join(process.cwd(), 'public/favicon.png');
  
  try {
    // Create a circular favicon from profile picture
    await sharp(input)
      .resize(180, 180, {
        fit: 'cover',
        position: 'center'
      })
      .composite([
        {
          input: Buffer.from(
            `<svg><circle cx="90" cy="90" r="90" fill="white"/></svg>`
          ),
          blend: 'dest-in'
        }
      ])
      .png()
      .toFile(output);
    
    console.log('✅ Favicon generated successfully!');
  } catch (error) {
    console.error('❌ Error generating favicon:', error);
    process.exit(1);
  }
}

generateFavicon();
