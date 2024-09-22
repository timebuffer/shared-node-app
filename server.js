const express = require('express');
const app = express();
const port = 2900;

// Middleware to handle requests and determine the host
app.use((req, res, next) => {
    const host = req.hostname;

    // Serve different dynamic content based on the domain
    switch (host) {
        case 'karaarslan.at':
            res.send('<h1>Dynamic content for karaarslan.at</h1>');
            break;
        case '365ects.com':
            res.send('<h1>Dynamic content for 365ects.com</h1>');
            break;
        case '365jects.com':
            res.send('<h1>Dynamic content for 365jects.com</h1>');
            break;
        case 'alignvisit.com':
            res.send('<h1>Dynamic content for alignvisit.com</h1>');
            break;
        case 'alorsondanse.net':
            res.send('<h1>Dynamic content for alorsondanse.net</h1>');
            break;
        case 'apparrivederci.com':
            res.send('<h1>Dynamic content for apparrivederci.com</h1>');
            break;
        case 'applicationbroadcast.com':
            res.send('<h1>Dynamic content for applicationbroadcast.com</h1>');
            break;
        case 'broad2broad.com':
            res.send('<h1>Dynamic content for broad2broad.com</h1>');
            break;
        case 'callmeup.io':
            res.send('<h1>Dynamic content for callmeup.io</h1>');
            break;
        case 'certableau.com':
            res.send('<h1>Dynamic content for certableau.com</h1>');
            break;
        case 'certtable.com':
            res.send('<h1>Dynamic content for certtable.com</h1>');
            break;
        case 'chaircount.com':
            res.send('<h1>Dynamic content for chaircount.com</h1>');
            break;
        case 'ciaorelated.com':
            res.send('<h1>Dynamic content for ciaorelated.com</h1>');
            break;
        case 'copsareprayerstoo.com':
            res.send('<h1>Dynamic content for copsareprayerstoo.com</h1>');
            break;
        case 'cosmetrics.io':
            res.send('<h1>Dynamic content for cosmetrics.io</h1>');
            break;
        case 'countestate.com':
            res.send('<h1>Dynamic content for countestate.com</h1>');
            break;
        case 'counteverest.com':
            res.send('<h1>Dynamic content for counteverest.com</h1>');
            break;
        case 'cutsimulation.com':
            res.send('<h1>Dynamic content for cutsimulation.com</h1>');
            break;
        case 'datacity.wien':
            res.send('<h1>Dynamic content for datacity.wien</h1>');
            break;
        case 'devitable.com':
            res.send('<h1>Dynamic content for devitable.com</h1>');
            break;
        case 'domainsurvey.eu':
            res.send('<h1>Dynamic content for domainsurvey.eu</h1>');
            break;
        case 'domainsurvey.net':
            res.send('<h1>Dynamic content for domainsurvey.net</h1>');
            break;
        case 'emanuration.com':
            res.send('<h1>Dynamic content for emanuration.com</h1>');
            break;
        case 'erstebahn.com':
            res.send('<h1>Dynamic content for erstebahn.com</h1>');
            break;
        case 'evereast.app':
            res.send('<h1>Dynamic content for evereast.app</h1>');
            break;
        case 'evereast.ch':
            res.send('<h1>Dynamic content for evereast.ch</h1>');
            break;
        case 'evereast.cloud':
            res.send('<h1>Dynamic content for evereast.cloud</h1>');
            break;
        case 'forensik.cc':
            res.send('<h1>Dynamic content for forensik.cc</h1>');
            break;
        case 'grewupatmidnight.com':
            res.send('<h1>Dynamic content for grewupatmidnight.com</h1>');
            break;
        case 'hashtaghymn.com':
            res.send('<h1>Dynamic content for hashtaghymn.com</h1>');
            break;
        case 'holdbacktheriver.com':
            res.send('<h1>Dynamic content for holdbacktheriver.com</h1>');
            break;
        case 'incmic.com':
            res.send('<h1>Dynamic content for incmic.com</h1>');
            break;
        case 'incvoice.com':
            res.send('<h1>Dynamic content for incvoice.com</h1>');
            break;
        case 'ingpub.com':
            res.send('<h1>Dynamic content for ingpub.com</h1>');
            break;
        case 'kannschonsein.com':
            res.send('<h1>Dynamic content for kannschonsein.com</h1>');
            break;
        case 'ksoik.com':
            res.send('<h1>Dynamic content for ksoik.com</h1>');
            break;
        case 'kurcalama.com':
            res.send('<h1>Dynamic content for kurcalama.com</h1>');
            break;
        case 'lainted.com':
            res.send('<h1>Dynamic content for lainted.com</h1>');
            break;
        case 'leiwand.bio':
            res.send('<h1>Dynamic content for leiwand.bio</h1>');
            break;
        case 'leiwand.cloud':
            res.send('<h1>Dynamic content for leiwand.cloud</h1>');
            break;
        case 'leiwand.codes':
            res.send('<h1>Dynamic content for leiwand.codes</h1>');
            break;
        case 'leiwand.store':
            res.send('<h1>Dynamic content for leiwand.store</h1>');
            break;
        case 'lescreps.com':
            res.send('<h1>Dynamic content for lescreps.com</h1>');
            break;
        case 'lierrex.com':
            res.send('<h1>Dynamic content for lierrex.com</h1>');
            break;
        case 'mainted.com':
            res.send('<h1>Dynamic content for mainted.com</h1>');
            break;
        case 'manuration.com':
            res.send('<h1>Dynamic content for manuration.com</h1>');
            break;
        case 'myflashes.com':
            res.send('<h1>Dynamic content for myflashes.com</h1>');
            break;
        case 'ndelier.com':
            res.send('<h1>Dynamic content for ndelier.com</h1>');
            break;
        case 'noisyshift.com':
            res.send('<h1>Dynamic content for noisyshift.com</h1>');
            break;
        case 'nsteuer.com':
            res.send('<h1>Dynamic content for nsteuer.com</h1>');
            break;
        case 'oepbak.com':
            res.send('<h1>Dynamic content for oepbak.com</h1>');
            break;
        case 'openedbills.com':
            res.send('<h1>Dynamic content for openedbills.com</h1>');
            break;
        case 'phository.com':
            res.send('<h1>Dynamic content for phository.com</h1>');
            break;
        case 'pinnwand.bio':
            res.send('<h1>Dynamic content for pinnwand.bio</h1>');
            break;
        case 'pinnwand.cloud':
            res.send('<h1>Dynamic content for pinnwand.cloud</h1>');
            break;
        case 'pinnwand.dev':
            res.send('<h1>Dynamic content for pinnwand.dev</h1>');
            break;
        case 'qapp.at':
            res.send('<h1>Dynamic content for qapp.at</h1>');
            break;
        case 'qrown.bio':
            res.send('<h1>Dynamic content for qrown.bio</h1>');
            break;
        case 'qtab.bio':
            res.send('<h1>Dynamic content for qtab.bio</h1>');
            break;
        case 'qtab.cloud':
            res.send('<h1>Dynamic content for qtab.cloud</h1>');
            break;
        case 'qtab.dev':
            res.send('<h1>Dynamic content for qtab.dev</h1>');
            break;
        case 'restmüll.net':
            res.send('<h1>Dynamic content for restmüll.net</h1>');
            break;
        case 'schnittholzlager.at':
            res.send('<h1>Dynamic content for schnittholzlager.at</h1>');
            break;
        case 'schnittholzlager.ch':
            res.send('<h1>Dynamic content for schnittholzlager.ch</h1>');
            break;
        case 'skincaringfactory.com':
            res.send('<h1>Dynamic content for skincaringfactory.com</h1>');
            break;
        case 'smartbroad.cloud':
            res.send('<h1>Dynamic content for smartbroad.cloud</h1>');
            break;
        case 'smartbroad.io':
            res.send('<h1>Dynamic content for smartbroad.io</h1>');
            break;
        case 'smartbroad.net':
            res.send('<h1>Dynamic content for smartbroad.net</h1>');
            break;
        case 'smartbroad.org':
            res.send('<h1>Dynamic content for smartbroad.org</h1>');
            break;
        case 'songrelated.com':
            res.send('<h1>Dynamic content for songrelated.com</h1>');
            break;
        case 'songverwandt.com':
            res.send('<h1>Dynamic content for songverwandt.com</h1>');
            break;
        case 'spgln.com':
            res.send('<h1>Dynamic content for spgln.com</h1>');
            break;
        case 'spgln.io':
            res.send('<h1>Dynamic content for spgln.io</h1>');
            break;
        case 'spieglein.io':
            res.send('<h1>Dynamic content for spieglein.io</h1>');
            break;
        case 'ssdbasket.com':
            res.send('<h1>Dynamic content for ssdbasket.com</h1>');
            break;
        case 'swarm-networks.com':
            res.send('<h1>Dynamic content for swarm-networks.com</h1>');
            break;
        case 'timebuffer.app':
            res.send('<h1>Dynamic content for timebuffer.app</h1>');
            break;
        case 'timebuffer.at':
            res.send('<h1>Dynamic content for timebuffer.at</h1>');
            break;
        case 'timebuffer.bio':
            res.send('<h1>Dynamic content for timebuffer.bio</h1>');
            break;
        case 'timebuffer.ch':
            res.send('<h1>Dynamic content for timebuffer.ch</h1>');
            break;
        case 'timebuffer.de':
            res.send('<h1>Dynamic content for timebuffer.de</h1>');
            break;
        case 'timebuffer.dev':
            res.send('<h1>Dynamic content for timebuffer.dev</h1>');
            break;
        case 'timebuffer.es':
            res.send('<h1>Dynamic content for timebuffer.es</h1>');
            break;
        case 'timebuffer.eu':
            res.send('<h1>Dynamic content for timebuffer.eu</h1>');
            break;
        case 'timebuffer.io':
            res.send('<h1>Dynamic content for timebuffer.io</h1>');
            break;
        case 'timebuffer.net':
            res.send('<h1>Dynamic content for timebuffer.net</h1>');
            break;
        case 'timebuffer.nl':
            res.send('<h1>Dynamic content for timebuffer.nl</h1>');
            break;
        case 'timebuffer.sk':
            res.send('<h1>Dynamic content for timebuffer.sk</h1>');
            break;
        case 'timebuffer.us':
            res.send('<h1>Dynamic content for timebuffer.us</h1>');
            break;
        case 'timestamp.bio':
            res.send('<h1>Dynamic content for timestamp.bio</h1>');
            break;
        case 'timestamp.id':
            res.send('<h1>Dynamic content for timestamp.id</h1>');
            break;
        case 'trendcapped.com':
            res.send('<h1>Dynamic content for trendcapped.com</h1>');
            break;
        case 'tupace.com':
            res.send('<h1>Dynamic content for tupace.com</h1>');
            break;
        case 'uecuencue.com':
            res.send('<h1>Dynamic content for uecuencue.com</h1>');
            break;
        case 'wallsofnature.com':
            res.send('<h1>Dynamic content for wallsofnature.com</h1>');
            break;
        case 'welthandelsplatz.dev':
            res.send('<h1>Dynamic content for welthandelsplatz.dev</h1>');
            break;
        case 'whitelarry.com':
            res.send('<h1>Dynamic content for whitelarry.com</h1>');
            break;
        case 'xelated.com':
            res.send('<h1>Dynamic content for xelated.com</h1>');
            break;
        case 'xpmouse.uk':
            res.send('<h1>Dynamic content for xpmouse.uk</h1>');
            break;
        case 'öpbak.com':
            res.send('<h1>Dynamic content for öpbak.com</h1>');
            break;
        case 'ücüncü.com':
            res.send('<h1>Dynamic content for üçüncü.com</h1>');
            break;
        default:
            res.status(404).send('<h1>404 - Not Found</h1>');
    }
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
