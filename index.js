class AmelCloud {
    constructor(cloudName, founder, storageCapacityGB) {
      this.cloudName = cloudName;
      this.founder = founder;
      this.storageCapacityGB = storageCapacityGB;
      this.users = [];
      this.files = [];
    }
  
    addUser(userName) {
      this.users.push(userName);
      console.log(`${userName} has been added to the Amel Cloud.`);
    }
  
    uploadFile(fileName, fileSizeGB) {
      if (fileSizeGB <= this.storageCapacityGB) {
        this.files.push({ name: fileName, sizeGB: fileSizeGB });
        this.storageCapacityGB -= fileSizeGB;
        console.log(`${fileName} has been uploaded to the Amel Cloud.`);
      } else {
        console.log(`Insufficient storage. Unable to upload ${fileName}.`);
      }
    }
  
    listFiles() {
      console.log(`
        Files in ${this.cloudName}:
        ${this.files.map(file => `${file.name} - ${file.sizeGB}GB`).join('\n')}
      `);
    }
  
    displayCloudInfo() {
      console.log(`
        Amel Cloud Information:
        Cloud Name: ${this.cloudName}
        Founder: ${this.founder}
        Storage Capacity: ${this.storageCapacityGB}GB
        Users: ${this.users.join(', ')}
      `);
    }
  }
  
  // Example usage
  const amelCloudService = new AmelCloud('AmelCloud', 'Amelia', 100);
  
  amelCloudService.addUser('John');
  amelCloudService.addUser('Emily');
  amelCloudService.uploadFile('Document.pdf', 5);
  amelCloudService.uploadFile('Presentation.pptx', 15);
  amelCloudService.listFiles();
  amelCloudService.displayCloudInfo();
  