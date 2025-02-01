export interface CarType {
  ID: number;
  Make: string;
  ModelName: string;
  Year: number;
  EngineSize: number;
  FuelType: string;
  Transmission: string;
  OwnerID: string;
  ImageURLs: string[];

}

export const initCar = {
  ID: 1, // Set the ID to the current index
  Make: 'Toyota',
  ModelName: 'Corolla S',
  EngineSize: 90,
  Year: 2023,
  FuelType: 'petrol',
  Transmission: 'auto',
  OwnerID: 'bawa',
  ImageURLs: [
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300'
  ]
}

    /*
    const initCars = Array.from({ length: 15 }, (_, i) => ({
        ID: i, // Set the ID to the current index
        Make: 'Toyota',
        ModelName: 'Corolla S',
        EngineSize: 90,
        Year: 2023,
        FuelType: 'petrol',
        Transmission: 'auto',
        OwnerID: 'bawa',
        ImageURLs: [
            'https://picsum.photos/200/300',
            'https://picsum.photos/200/300',
            'https://picsum.photos/200/300',
            'https://picsum.photos/200/300',
            'https://picsum.photos/200/300',
            'https://picsum.photos/200/300'
        ]
    }));
    */
