export interface IDog {
  breeds: [
    {
      bred_for: string;
      breed_group: string;
      height: {
        imperial: string;
        metric: string;
      };
      id: number;
      life_span: string;
      name: string;
      reference_image_id: string;
      temperament: string;
      weight: {
        imperial: string;
        metric: string;
      };
    }
  ];
  height: number;
  id: string;
  url: string;
  width: number;
}

export const dogInitialValue: IDog = {
  breeds: [
    {
      bred_for: '',
      breed_group: '',
      height: {
        imperial: '',
        metric: '',
      },
      id: 0,
      life_span: '',
      name: '',
      reference_image_id: '',
      temperament: '',
      weight: {
        imperial: '',
        metric: '',
      },
    },
  ],
  height: 0,
  id: '',
  url: 'https://cdn2.thedogapi.com/images/Tu1CbaVud.jpg',
  width: 0,
};
