import React from 'react';

const ResultsApplications = () => (
  <div>
    <h1>Results</h1>
    <p>
      The proposed Hybrid AES-DES Encryption Algorithm with Chaotic Sequences has shown promising results in terms of both security and computational efficiency. 
      The combination of AES and DES provides a strong defense against cryptanalytic attacks, while the inclusion of chaotic sequences enhances the unpredictability of the encrypted data.
    </p>
    <h2>Encryption and Decryption Speed</h2>
    <p>
      The encryption and decryption times are competitive with other encryption algorithms, especially when considering the additional layer of security provided by the hybrid approach. 
      AES performs encryption at a high speed, while DES provides an additional layer without significantly affecting performance.
    </p>
    {/* <img src="image7" alt="Encryption and Decryption Speed Graph" style={{ width: '100%', marginBottom: '20px' }} /> */}

    <h2>Resistance to Attacks</h2>
    <p>
      The hybrid algorithm has demonstrated strong resistance to various cryptographic attacks, including brute-force, statistical, and differential cryptanalysis. 
      The chaotic sequence significantly increases the entropy of the data, making it difficult for attackers to predict or reproduce the encrypted content.
    </p>
    {/* <img src="image8" alt="Resistance to Attacks Diagram" style={{ width: '100%', marginBottom: '20px' }} /> */}

    <h2>Performance in Real-world Scenarios</h2>
    <p>
      In real-world scenarios, the hybrid AES-DES encryption system performs efficiently, balancing security and speed. It is especially suitable for systems where security is a priority, 
      such as in cloud storage and secure communication systems.
    </p>
    {/* <img src="image9" alt="Real-world Performance Chart" style={{ width: '100%', marginBottom: '20px' }} /> */}

    <h1>Applications of Hybrid AES-DES Algorithm with Chaotic Sequence</h1>
    <p>Here are detailed applications for the proposed algorithm:</p>

    <h2>1. Data Transmission Security</h2>
    <ul>
      <li><b>Use Case:</b> Email encryption, secure financial transactions, and military communications.</li>
      <li><b>How it Helps:</b> By applying the hybrid AES-DES algorithm, combined with chaotic sequence obfuscation, data remains secure during transmission, even over public or untrusted networks.</li>
    </ul>

    <h2>2. Cloud Data Protection</h2>
    <ul>
      <li><b>Use Case:</b> Protecting sensitive user data in cloud storage solutions (e.g., Google Drive, AWS S3).</li>
      <li><b>How it Helps:</b> Encrypting data with two layers of encryption ensures it is secure even if the cloud provider's infrastructure is breached.</li>
    </ul>

    <h2>3. IoT Devices</h2>
    <ul>
      <li><b>Use Case:</b> Smart sensors, wearables, and smart home devices.</li>
      <li><b>How it Helps:</b> The lightweight chaotic sequence modification and hybrid encryption offer a balance of security and computational efficiency suitable for resource-constrained devices.</li>
    </ul>

    <h2>4. Multimedia Encryption</h2>
    <ul>
      <li><b>Use Case:</b> Encrypting video, audio, and images to prevent unauthorized access or piracy.</li>
      <li><b>How it Helps:</b> The hybrid algorithm ensures multimedia files are encrypted in a way that is both secure and fast, crucial for large datasets like videos.</li>
    </ul>

    <h2>5. Healthcare Systems</h2>
    <ul>
      <li><b>Use Case:</b> Protecting electronic health records (EHRs) in hospitals and clinics.</li>
      <li><b>How it Helps:</b> Adds a layer of protection to sensitive patient data, ensuring compliance with privacy regulations (e.g., HIPAA, GDPR).</li>
    </ul>

    <h2>6. Blockchain Security</h2>
    <ul>
      <li><b>Use Case:</b> Securing off-chain data storage and communication in blockchain systems.</li>
      <li><b>How it Helps:</b> Hybrid encryption ensures secure off-chain operations without compromising performance.</li>
    </ul>

    <h2>7. Government and Defense Systems</h2>
    <ul>
      <li><b>Use Case:</b> Encryption of classified information in national security systems.</li>
      <li><b>How it Helps:</b> Provides a highly secure method for protecting sensitive data against modern threats, including quantum computing.</li>
    </ul>

    <h2>8. Digital Rights Management (DRM)</h2>
    <ul>
      <li><b>Use Case:</b> Protecting intellectual property, such as software or digital content.</li>
      <li><b>How it Helps:</b> Prevents unauthorized copying or distribution by encrypting digital content with a robust hybrid algorithm.</li>
    </ul>
  </div>
);

export default ResultsApplications;
