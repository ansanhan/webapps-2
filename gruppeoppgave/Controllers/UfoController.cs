using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using gruppeoppgave_1.DAL;
using gruppeoppgave_1.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace gruppeoppgave_1.Controllers
{
    [Route("[controller]/[action]")]
    public class UfoController : ControllerBase
    {
        private readonly InterfaceUfoRepository _UfoDB;

        public UfoController(InterfaceUfoRepository UfoDB)
        {
            _UfoDB = UfoDB;
        }

        public async Task<bool> Lagre(Ufo LagreUfo)
        {
            return await _UfoDB.Lagre(LagreUfo);
        }

        public async Task<List<Ufo>> HentAlle()
        {
            return await _UfoDB.HentAlle();
        }

        public async Task<bool> Slett(int id)
        {
            return await _UfoDB.Slett(id);
        }

        public async Task<Ufo> HentEn(int id)
        {
            return await _UfoDB.HentEn(id);
        }

        public async Task<bool> Endre(Ufo endreRes)
        {
            return await _UfoDB.Endre(endreRes);
        }
    }
}

