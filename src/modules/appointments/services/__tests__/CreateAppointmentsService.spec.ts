import AppError from '@shared/errors/AppError'

import FakeAppointmentsRepository from '../../repositories/fakes/FakeAppointmentsRepository'

import CreateAppointmentsService from '../CreateAppointmentsService'

let fakeAppointmentsRepository: FakeAppointmentsRepository

let createAppointments: CreateAppointmentsService

describe('CreateAppointments', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository()

    createAppointments = new CreateAppointmentsService(
      fakeAppointmentsRepository,
    )
  })

  it('should be able to create a new appointment', async () => {
    const appointment = await createAppointments.execute({
      date: new Date(),
      provider_id: '102030',
    })

    expect(appointment).toHaveProperty('id')

    expect(appointment.provider_id).toBe('102030')
  })

  it('should not be able to create two appointments on the same time', async () => {
    const appointmentDate = new Date(2021, 1, 12, 23)

    await createAppointments.execute({
      date: appointmentDate,
      provider_id: '102030',
    })

    await expect(
      createAppointments.execute({
        date: appointmentDate,
        provider_id: '102030',
      }),
    ).rejects.toBeInstanceOf(AppError)
  })
})
