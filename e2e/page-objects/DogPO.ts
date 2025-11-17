import { Page } from '@playwright/test';

export class DogPO {
  constructor(private page: Page) {}

  async goto(id: string) {
    await this.page.goto(`/adopt/${id}`);
  }

  get sponsorButton() {
    return this.page.getByTestId('btn-sponsor');
  }

  get publicBio() {
    return this.page.getByTestId('dog-bio-public');
  }

  get ageBadge() {
    return this.page.getByTestId('badge-age');
  }

  get breedBadge() {
    return this.page.getByTestId('badge-breed');
  }

  get specialNeedsBadge() {
    return this.page.getByTestId('badge-special-needs');
  }

  async expectPublicInfoVisible(name: string) {
    await this.publicBio.isVisible();
    await this.ageBadge.isVisible();
    await this.breedBadge.isVisible();
    await this.page.getByText(name).isVisible();
  }
}
